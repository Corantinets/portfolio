"""Guitar Hero USB Controller - Main Loop

Scans button inputs and sends HID reports at 1000Hz.
"""

import board
import digitalio
import time
import usb_hid
from hid_gamepad import Gamepad

# GPIO pins for 9 mechanical switches
BUTTON_PINS = [
    board.GP20, board.GP21, board.GP0, board.GP1, board.GP2,
    board.GP15, board.GP16, board.GP6, board.GP7
]

def initialize_buttons():
    """Configure GPIO pins as inputs with pull-up resistors."""
    buttons = []
    for pin in BUTTON_PINS:
        btn = digitalio.DigitalInOut(pin)
        btn.direction = digitalio.Direction.INPUT
        btn.pull = digitalio.Pull.UP
        buttons.append(btn)
    return buttons

def main():
    """Main input loop with 1ms polling rate."""
    buttons = initialize_buttons()
    gamepad = Gamepad(usb_hid.devices)
    states = [False] * len(buttons)
    
    print("Controller Ready")
    
    while True:
        for i, btn in enumerate(buttons):
            pressed = not btn.value
            
            if pressed != states[i]:
                states[i] = pressed
                
                if pressed:
                    gamepad.press_buttons(i + 1)
                else:
                    gamepad.release_buttons(i + 1)
        
        time.sleep(0.001)

if __name__ == "__main__":
    main()
