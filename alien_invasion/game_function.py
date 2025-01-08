import sys
import pygame
from bullet import Bullet  # Import the Bullet class

def check_events(ai_settings, screen, ship, bullets):
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:  # Check if spacebar is pressed
                print("Spacebar pressed")
                new_bullet = Bullet(ai_settings, screen, ship)  # Create a new bullet
                bullets.add(new_bullet)  # Add the bullet to the group

def update_screen(ai_settings, screen, ship, bullets):
    screen.fill(ai_settings.bg_color)
    ship.blitme()
    
    for bullet in bullets.sprites():  # Draw each bullet
        bullet.draw_bullet()

    pygame.display.flip()