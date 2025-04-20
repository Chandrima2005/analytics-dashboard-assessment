import pandas as pd
import matplotlib.pyplot as plt

def plot_top_5_ev_countries(file_path):

    try:
        
        df = pd.read_csv(file_path)
        country_column_name = 'County'  # Assuming 'State' represents countries, adjust if needed

        # Count the number of EVs per country
        ev_counts_by_country = df[country_column_name].value_counts()

        # Get the top 5 countries
        top_5_countries = ev_counts_by_country.head(5)

        # Print the graph data before plotting
        print("\nData before plotting:")
        print(top_5_countries)

        # Create the bar chart
        plt.figure(figsize=(10, 6))  # Adjust figure size as needed
        top_5_countries.plot(kind='bar')
        plt.xlabel('Country')
        plt.ylabel('Number of EVs')
        plt.title('Top 5 Countries by EV Count')
        plt.xticks(
            rotation=45, ha='right'
        )  # Rotate x-axis labels for better readability
        plt.tight_layout()
        plt.show()
    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please check the file and data for any issues.")


if __name__ == "__main__":
    # Replace with the actual path to your CSV file
    file_path = "C:\\Users\\dasch\\Desktop\\Summer internship ju\\analytics-dashboard-assessment\\data-to-visualize\\Electric_Vehicle_Population_Data.csv"
    plot_top_5_ev_countries(file_path)
