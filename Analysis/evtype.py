import pandas as pd
import matplotlib.pyplot as plt

def plot_ev_type_distribution(file_path):
    """
    Reads EV data from a CSV file, calculates the distribution of electric vehicle types,
    and plots the results in a pie chart.

    Args:
        file_path (str): The path to the CSV file.
    """
    try:
        # Load the CSV file into a Pandas DataFrame
        df = pd.read_csv(file_path)

        # Print the first few rows to inspect the data
        print("First 5 rows of the data:")
        print(df.head())

        # Print the column names
        print("\nColumn names:")
        print(df.columns)

        # Check if the 'Electric Vehicle Type' column exists
        if 'Electric Vehicle Type' not in df.columns:
            print(
                "\nError: 'Electric Vehicle Type' column not found in the CSV file."
            )
            return

        # Count the occurrences of each electric vehicle type
        type_counts = df['Electric Vehicle Type'].value_counts()

        # Print the counts
        print("\nEV Type Counts:")
        print(type_counts)

        # Create the pie chart
        plt.figure(figsize=(8, 6))  # Adjust figure size as needed
        plt.pie(
            type_counts,
            labels=type_counts.index,
            autopct='%1.1f%%',  # Display percentages with one decimal place
            startangle=90,  # Start the pie chart at 90 degrees
            colors=['skyblue', 'lightgreen'],  # Optional: Specify colors
        )
        plt.title('Distribution of Electric Vehicle Types')
        plt.axis('equal')  # Ensure the pie chart is circular
        plt.tight_layout()
        plt.show()

    except FileNotFoundError:
        print(f"\nError: File not found at '{file_path}'.")
        print("Please make sure the file path is correct.")
    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please check the file and data for any issues.")


if __name__ == "__main__":
    # Replace with the actual path to your CSV file
    file_path = "C:\\Users\\dasch\\Desktop\\Summer internship ju\\analytics-dashboard-assessment\\data-to-visualize\\Electric_Vehicle_Population_Data.csv"
    plot_ev_type_distribution(file_path)
