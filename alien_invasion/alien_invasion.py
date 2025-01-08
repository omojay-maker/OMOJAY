import pygame
import sys
from settings import Setting
from ship import Ship
from bullet import Bullet  # Import the Bullet class
import game_function as gf
from pygame.sprite import Group

def run_game():
    # Initialize Pygame
    pygame.init()
    
    # Create an instance of Settings
    ai_settings = Setting()
    
    # Set up the screen
    screen = pygame.display.set_mode((ai_settings.screen_width, ai_settings.screen_height))
    pygame.display.set_caption("Alien Invasion")
    
    # Create an instance of Ship
    ship = Ship(screen)
    bullets = Group()
    
    # Main game loop
    while True:
        gf.check_events(ai_settings, screen, ship, bullets)  # Pass bullets to check_events
        bullets.update()  # Update bullet positions
        gf.update_screen(ai_settings, screen, ship, bullets)  # Update the screen

# Run the game
run_game()