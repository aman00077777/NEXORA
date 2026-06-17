import os
from PIL import Image

src_image_path = r"C:\Users\Asus\.gemini\antigravity-ide\brain\36545fd9-17fe-4566-9677-9f0ae35b0594\media__1781684416729.jpg"
out_logo_path = r"c:\Users\Asus\OneDrive\Nexora\public\nexora_logo.png"
app_icon_path = r"c:\Users\Asus\OneDrive\Nexora\app\icon.png"
favicon_path = r"c:\Users\Asus\OneDrive\Nexora\app\favicon.ico"

def process_logo():
    if not os.path.exists(src_image_path):
        print(f"Error: source image not found at {src_image_path}")
        return

    # Open source image
    img = Image.open(src_image_path).convert("RGBA")
    width, height = img.size
    
    new_data = []
    purple_pixels = []
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            
            # Detect purple range (used to find the icon bounding box)
            # Purple color has high blue and red, low green.
            is_purple = (b > r + 25) and (r > g) and (b > 80)
            if is_purple:
                purple_pixels.append((x, y))
            
            # Luma Key background removal
            # Calculate luminance
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            
            # Thresholds
            min_lum = 35.0
            max_lum = 65.0
            
            if lum < min_lum:
                # Completely transparent
                new_data.append((0, 0, 0, 0))
            elif lum > max_lum:
                # Completely opaque (original color)
                new_data.append((r, g, b, 255))
            else:
                # Interpolate alpha (anti-aliased edges)
                factor = (lum - min_lum) / (max_lum - min_lum)
                alpha = int(factor * 255)
                new_data.append((r, g, b, alpha))

    # Save transparent logo
    logo_img = Image.new("RGBA", img.size)
    logo_img.putdata(new_data)
    logo_img.save(out_logo_path, "PNG")
    print(f"Successfully processed logo with transparent background and saved to {out_logo_path}")

    # Crop the "N" icon for favicon using purple coordinates
    if purple_pixels:
        xs = [p[0] for p in purple_pixels]
        ys = [p[1] for p in purple_pixels]
        
        min_x, max_x = min(xs), max(xs)
        min_y, max_y = min(ys), max(ys)
        
        # Expand bounds slightly to catch the white curve next to it
        # In the logo, the white curve is on the right and bottom of the purple curve.
        padding_l = int((max_x - min_x) * 0.1)
        padding_t = int((max_y - min_y) * 0.1)
        padding_r = int((max_x - min_x) * 0.4) # larger right padding for the white curve
        padding_b = int((max_y - min_y) * 0.2) # bottom padding
        
        crop_left = max(0, min_x - padding_l)
        crop_top = max(0, min_y - padding_t)
        crop_right = min(width, max_x + padding_r)
        crop_bottom = min(height, max_y + padding_b)
        
        # Crop
        icon_img = logo_img.crop((crop_left, crop_top, crop_right, crop_bottom))
        
        # Make it square
        w_icon, h_icon = icon_img.size
        size = max(w_icon, h_icon)
        square_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        
        # Paste centered
        offset_x = (size - w_icon) // 2
        offset_y = (size - h_icon) // 2
        square_img.paste(icon_img, (offset_x, offset_y))
        
        # Create App Router icon.png
        icon_32 = square_img.resize((32, 32), Image.Resampling.LANCZOS)
        icon_32.save(app_icon_path, "PNG")
        print(f"Created clean Next.js app/icon.png at {app_icon_path}")
        
        # Create favicon.ico
        icon_ico = square_img.resize((32, 32), Image.Resampling.LANCZOS)
        icon_ico.save(favicon_path, format="ICO")
        print(f"Created app/favicon.ico at {favicon_path}")
    else:
        # Fallback if no purple pixels found
        print("Warning: could not locate 'N' icon via purple pixels, resizing whole logo")
        logo_img.resize((32, 32)).save(app_icon_path, "PNG")
        logo_img.resize((32, 32)).save(favicon_path, format="ICO")

if __name__ == "__main__":
    process_logo()
