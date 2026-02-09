"""USB HID Gamepad Controller for CircuitPython

Implements a 16-button gamepad using the HID protocol.
"""

import struct
import usb_hid


class Gamepad:
    """USB HID Gamepad with 16 button support."""
    
    def __init__(self, devices):
        """Initialize gamepad device.
        
        Args:
            devices: USB HID device list from usb_hid.devices
        """
        self._gamepad_device = self._find_gamepad_device(devices)
        self._buttons = 0
    
    def _find_gamepad_device(self, devices):
        """Locate the gamepad device in USB HID devices."""
        if isinstance(devices, (list, tuple)):
            for device in devices:
                if device.usage_page == 0x01 and device.usage == 0x05:
                    return device
        
        return devices[0] if devices else None
    
    def press_buttons(self, *buttons):
        """Press one or more buttons.
        
        Args:
            buttons: Button numbers (1-16)
        """
        for button in buttons:
            if 1 <= button <= 16:
                self._buttons |= (1 << (button - 1))
        self._send()
    
    def release_buttons(self, *buttons):
        """Release one or more buttons.
        
        Args:
            buttons: Button numbers (1-16)
        """
        for button in buttons:
            if 1 <= button <= 16:
                self._buttons &= ~(1 << (button - 1))
        self._send()
    
    def release_all(self):
        """Release all buttons."""
        self._buttons = 0
        self._send()
    
    def _send(self):
        """Send HID report to host."""
        if self._gamepad_device:
            report = struct.pack("<H", self._buttons) + b'\x00'
            
            try:
                self._gamepad_device.send_report(report)
            except OSError:
                pass

