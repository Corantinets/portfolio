"""Guitar Hero USB Controller - Boot Configuration

Configures USB HID gamepad interface and storage access control.
Hold GP7 button during boot to enable programming mode.
"""

import board
import digitalio
import storage
import usb_hid

# USB HID Gamepad Report Descriptor (16 buttons)
GAMEPAD_REPORT_DESCRIPTOR = bytes((
    0x05, 0x01,  # Usage Page (Generic Desktop)
    0x09, 0x05,  # Usage (Gamepad)
    0xA1, 0x01,  # Collection (Application)
    0x85, 0x04,  #   Report ID (4)
    0x05, 0x09,  #   Usage Page (Button)
    0x19, 0x01,  #   Usage Minimum (Button 1)
    0x29, 0x10,  #   Usage Maximum (Button 16)
    0x15, 0x00,  #   Logical Minimum (0)
    0x25, 0x01,  #   Logical Maximum (1)
    0x75, 0x01,  #   Report Size (1)
    0x95, 0x10,  #   Report Count (16)
    0x81, 0x02,  #   Input (Data, Variable, Absolute)
    0x75, 0x08,  #   Report Size (8)
    0x95, 0x01,  #   Report Count (1)
    0x81, 0x01,  #   Input (Constant)
    0xC0         # End Collection
))

gamepad = usb_hid.Device(
    report_descriptor=GAMEPAD_REPORT_DESCRIPTOR,
    usage_page=0x01,
    usage=0x05,
    report_ids=(4,),
    in_report_lengths=(3,),
    out_report_lengths=(0,),
)

usb_hid.enable((gamepad,))

# Safety button for programming mode
safety = digitalio.DigitalInOut(board.GP7)
safety.pull = digitalio.Pull.UP

if safety.value:
    storage.disable_usb_drive()
    print("Gamepad Mode")
else:
    print("Programming Mode")
