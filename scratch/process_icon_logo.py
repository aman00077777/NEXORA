import os
from PIL import Image

src_image_path = r"C:\Users\Asus\.gemini\antigravity-ide\brain\36545fd9-17fe-4566-9677-9f0ae35b0594\media__1781685246180.png"
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
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            
            # Luma Key background removal
            # Calculate luminance
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            
            # Thresholds
            min_lum = 30.0
            max_lum = 60.0
            
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
    
    # Save processed logo
    logo_img.save(out_logo_path, "PNG")
    print(f"Successfully processed logo with transparent background and saved to {out_logo_path}")

    # Create App Router icon.png
    icon_32 = logo_img.resize((32, 32), Image.Resampling.LANCZOS)
    icon_32.save(app_icon_path, "PNG")
    print(f"Created clean Next.js app/icon.png at {app_icon_path}")
    
    # Create favicon.ico
    icon_ico = logo_img.resize((32, 32), Image.Resampling.LANCZOS)
    icon_ico.save(favicon_path, format="ICO")
    print(f"Created app/favicon.ico at {favicon_path}")

if __name__ == "__main__":
    process_logo()
