import pandas as pd
import matplotlib.pyplot as plt

def analyze_ev_market_trends(file_path):
    """
    Analyzes EV market trends from a CSV file and plots relevant bar graphs.

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

        # --- 1. EV Adoption Over Time ---
        if 'Model Year' in df.columns:
            # Group by 'Model Year' and count the number of EVs
            evs_by_year = df['Model Year'].value_counts().sort_index()

            # Print data before plotting
            print("\nEV Adoption Over Time:")
            print(evs_by_year)

            # Create bar graph
            plt.figure(figsize=(10, 6))
            evs_by_year.plot(kind='bar')
            plt.xlabel('Model Year')
            plt.ylabel('Number of EVs')
            plt.title('EV Adoption Over Time')
            plt.xticks(rotation=45, ha='right')
            plt.tight_layout()
            plt.show()
        else:
            print("\nWarning: 'Model Year' column not found. Skipping EV Adoption Over Time analysis.")

        # --- 2. Popular EV Makes ---
        if 'Make' in df.columns:
            # Get the top EV makes
            top_ev_makes = df['Make'].value_counts().head(10) # Get top 10 makes

            # Print data before plotting
            print("\nPopular EV Makes:")
            print(top_ev_makes)

            # Create bar graph
            plt.figure(figsize=(10, 6))
            top_ev_makes.plot(kind='bar', color='green')
            plt.xlabel('Make')
            plt.ylabel('Number of EVs')
            plt.title('Top 10 EV Makes')
            plt.xticks(rotation=45, ha='right')
            plt.tight_layout()
            plt.show()
        else:
            print("\nWarning: 'Make' column not found. Skipping Popular EV Makes analysis.")

        # --- 3. EV Type Preference ---
        if 'Electric Vehicle Type' in df.columns:
            # Count the occurrences of each EV type
            ev_type_counts = df['Electric Vehicle Type'].value_counts()

            # Print data before plotting
            print("\nEV Type Preference:")
            print(ev_type_counts)

            # Create bar graph
            plt.figure(figsize=(8, 5))
            ev_type_counts.plot(kind='bar', color='orange')
            plt.xlabel('Electric Vehicle Type')
            plt.ylabel('Number of EVs')
            plt.title('EV Type Preference (BEV vs. PHEV)')
            plt.xticks(rotation=0)
            plt.tight_layout()
            plt.show()
        else:
            print("\nWarning: 'Electric Vehicle Type' column not found. Skipping EV Type Preference analysis.")

    except FileNotFoundError:
        print(f"\nError: File not found at '{file_path}'.")
        print("Please make sure the file path is correct.")
    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please check the file and data for any issues.")

if __name__ == "__main__":
    # Replace with the actual path to your CSV file
    file_path = "C:\\Users\\dasch\\Desktop\\Summer internship ju\\analytics-dashboard-assessment\\data-to-visualize\\Electric_Vehicle_Population_Data.csv"
    analyze_ev_market_trends(file_path)
