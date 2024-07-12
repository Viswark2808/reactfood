import tkinter as tk
from tkinter import ttk, messagebox

yamaha_bikes = {
    "MT15": {
        "Engine": "155cc",
        "Power": "18.4 PS @ 10000 rpm",
        "Fuel Tank": "10 Litre",
        "Mileage": "45.87 km/l",
        "Ex-showroom Price": "1.68-1.74 Lakh",
        "Type": "Naked"
    },
    "R15": {
        "Engine": "155cc",
        "Power": "18.4 PS @ 10000 rpm",
        "Fuel Tank": "10 Litre",
        "Mileage": "45.87 km/l",
        "Ex-showroom Price": "1.82-1.97 Lakh",
        "Type": "Sport"
    },
    "FZ-FI": {
        "Engine": "149cc",
        "Power": "12.4 PS @ 7250 rpm",
        "Fuel Tank": "13 Litre",
        "Mileage": "45 km/l",
        "Ex-showroom Price": "1.13-1.16 Lakh",
        "Type": "Street"
    },
    "FZ-X": {
        "Engine": "149cc",
        "Power": "12.4 PS @ 7250 rpm",
        "Fuel Tank": "10 Litre",
        "Mileage": "45 km/l",
        "Ex-showroom Price": "1.16-1.19 Lakh",
        "Type": "Neo-Retro"
    },
    "R3": {
        "Engine": "321cc",
        "Power": "42 PS @ 10750 rpm",
        "Fuel Tank": "14 Litre",
        "Mileage": "23.3 km/l",
        "Ex-showroom Price": "3.50-3.60 Lakh",
        "Type": "Sport"
    },
    "MT03": {
        "Engine": "321cc",
        "Power": "41.4 PS @ 10750 rpm",
        "Fuel Tank": "14 Litre",
        "Mileage": "22 km/l",
        "Ex-showroom Price": "3.30-3.40 Lakh",
        "Type": "Street"
    },
    "FZ25": {
        "Engine": "249cc",
        "Power": "20.8 PS @ 8000 rpm",
        "Fuel Tank": "14 Litre",
        "Mileage": "42 km/l",
        "Ex-showroom Price": "1.35-1.38 Lakh",
        "Type": "Street"
    },
    "FZS25": {
        "Engine": "249cc",
        "Power": "20.8 PS @ 8000 rpm",
        "Fuel Tank": "14 Litre",
        "Mileage": "42 km/l",
        "Ex-showroom Price": "1.37-1.40 Lakh",
        "Type": "Street"
    },
    "R1M": {
        "Engine": "998cc",
        "Power": "200 PS @ 13500 rpm",
        "Fuel Tank": "17 Litre",
        "Mileage": "15 km/l",
        "Ex-showroom Price": "26.40 Lakh",
        "Type": "Superbike"
    },
    "R1": {
        "Engine": "998cc",
        "Power": "200 PS @ 13500 rpm",
        "Fuel Tank": "17 Litre",
        "Mileage": "15 km/l",
        "Ex-showroom Price": "20.39 Lakh",
        "Type": "Superbike"
    },
    "R6": {
        "Engine": "599cc",
        "Power": "120 PS @ 14500 rpm",
        "Fuel Tank": "17 Litre",
        "Mileage": "18 km/l",
        "Ex-showroom Price": "15.70 Lakh",
        "Type": "Sportbike"
    }
}

def open_booking_dialog():
    bike_model = bike_combobox.get().strip().upper().replace(" ", "-")  
    if bike_model in yamaha_bikes:
        dialog = tk.Toplevel(root)
        dialog.title(f"Book Yamaha {bike_model}")
        dialog.geometry("400x350")
        dialog.configure(bg="#0a043c")  
        
        tk.Label(dialog, text="Name:", bg="#0a043c", fg="white").pack(pady=5)
        name_entry = tk.Entry(dialog)
        name_entry.pack(pady=5)
        
        tk.Label(dialog, text="Phone Number:", bg="#0a043c", fg="white").pack(pady=5)
        phone_entry = tk.Entry(dialog)
        phone_entry.pack(pady=5)
        
        tk.Label(dialog, text="Address:", bg="#0a043c", fg="white").pack(pady=5)
        address_entry = tk.Entry(dialog)
        address_entry.pack(pady=5)
        
        tk.Label(dialog, text="Payment Method:", bg="#0a043c", fg="white").pack(pady=5)
        payment_methods = ["Cash", "Credit Card", "Debit Card", "EMI", "UPI", "Netbanking"]
        payment_combobox = ttk.Combobox(dialog, values=payment_methods, state="readonly")
        payment_combobox.pack(pady=5)
        
        def book_bike():
            name = name_entry.get().strip()
            phone = phone_entry.get().strip()
            address = address_entry.get().strip()
            payment_method = payment_combobox.get().strip()
            
    
            if not name.isalpha():
                messagebox.showerror("Error", " Enter the Name")
                return
            
        
            if not (phone.isdigit() and len(phone) == 10 and int(phone[0]) >= 6):
                messagebox.showerror("Error", "Enter valid phone no")
                return
            
            if not all([name, phone, address, payment_method]):
                messagebox.showerror("Error", "Please fill in all fields.")
                return
            
            confirmation_msg = f"Please confirm booking for Yamaha {bike_model} with the following details:\n\n"
            confirmation_msg += f"Name: {name}\n"
            confirmation_msg += f"Phone: {phone}\n"
            confirmation_msg += f"Address: {address}\n"
            confirmation_msg += f"Payment Method: {payment_method}\n\n"
            confirmation_msg += "Do you want to proceed with the booking?"
            
            confirm_booking = messagebox.askyesno("Confirm Booking", confirmation_msg)
            
            if confirm_booking:
                messagebox.showinfo("Booking Confirmed", f"Booking confirmed for {bike_model}.")
                dialog.destroy()  
                
            else:
                messagebox.showinfo("Booking Cancelled", "Booking cancelled.")
        
        tk.Button(dialog, text="Submit", command=book_bike).pack(pady=10)
        
        dialog.grab_set() 
        root.wait_window(dialog)  
    else:
        messagebox.showerror("Error", f"Yamaha bike '{bike_model}' not found in the database.")

def show_details():
    bike_model = bike_combobox.get().strip().upper().replace(" ", "-")
    if bike_model in yamaha_bikes:
        details = yamaha_bikes[bike_model]
        details_str = "\n".join([f"{key}: {value}" for key, value in details.items()])
        
        screen_width = root.winfo_screenwidth()
        screen_height = root.winfo_screenheight()
        msg_width = int(screen_width * 0.55)  
        msg_height = int(screen_height * 0.55) 
        
        msg_box = tk.Toplevel()
        msg_box.geometry(f"{msg_width}x{msg_height}+{int((screen_width - msg_width) / 2)}+{int((screen_height - msg_height) / 2)}")
        msg_box.title(f"Details for Yamaha {bike_model}")
        msg_box.configure(bg="#0a043c") 
        
        msg_label = tk.Label(msg_box, text=details_str, font=("Helvetica", 16), padx=20, pady=20, bg="#0a043c", fg="white")
        msg_label.pack(expand=True, fill="both")
        
    else:
        messagebox.showerror("Error", f"Yamaha bike '{bike_model}' not found in the database.")


root = tk.Tk()
root.title("Yamaha Bike Details")
root.configure(bg="#0a043c")  

label = tk.Label(root, text="Select Yamaha bike model:", font=("Helvetica", 44), bg="#0a043c", fg="white")
label.pack(pady=(200, 10)) 



bike_combobox = ttk.Combobox(root, values=list(yamaha_bikes.keys()), font=("Helvetica", 20), state="readonly")
bike_combobox.pack(pady=(10, 20)) 

button_details = tk.Button(root, text="Show Details", command=show_details, font=("Helvetica", 12))
button_details.pack(pady=10)

button_book = tk.Button(root, text="Book Bike", command=open_booking_dialog, font=("Helvetica", 12))
button_book.pack(pady=10)

root.mainloop()
