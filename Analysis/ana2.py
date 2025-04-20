import pandas as pd

def get_unique_values_with_percentages(file_path):
    """
    Reads EV data from a CSV file and extracts the unique values from the
    'County', 'Make', and 'Electric Vehicle Type' columns, along with the
    percentage of each value's occurrence, and returns the results as dictionaries.

    Args:
        file_path (str): The path to the CSV file.

    Returns:
        tuple: A tuple containing three dictionaries:
            - county_percentage_dict: Dictionary with unique counties as keys and their percentages as values.
            - make_percentage_dict: Dictionary with unique makes as keys and their percentages as values.
            - ev_type_percentage_dict: Dictionary with unique electric vehicle types as keys and their percentages as values.
            Returns None if file not found or error occurs.
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

        # Check if the required columns exist
        required_columns = ['County', 'Make', 'Electric Vehicle Type']
        for col in required_columns:
            if col not in df.columns:
                print(f"\nError: Column '{col}' not found in the CSV file.")
                return None, None, None

        # Calculate total number of EVs
        total_evs = len(df)

        # Function to calculate percentages for a given column
        def calculate_percentages(column_name):
            """
            Calculates the percentage of each unique value in a given column.

            Args:
                column_name (str): The name of the column.

            Returns:
                dict: A dictionary where keys are unique values from the column,
                      and values are their corresponding percentages.
            """
            counts = df[column_name].value_counts()
            percentages = (counts / total_evs) * 100
            return percentages.to_dict()

        # Get unique values and their percentages for each column
        county_percentage_dict = calculate_percentages('County')
        make_percentage_dict = calculate_percentages('Make')
        ev_type_percentage_dict = calculate_percentages('Electric Vehicle Type')

        # Print the dictionaries
        print("\nCounty Percentages:")
        print(county_percentage_dict)
        print("\nMake Percentages:")
        print(make_percentage_dict)
        print("\nElectric Vehicle Type Percentages:")
        print(ev_type_percentage_dict)

        return county_percentage_dict, make_percentage_dict, ev_type_percentage_dict

    except FileNotFoundError:
        print(f"\nError: File not found at '{file_path}'.")
        print("Please make sure the file path is correct.")
        return None, None, None
    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please check the file and data for any issues.")
        return None, None, None



if __name__ == "__main__":
    # Replace with the actual path to your CSV file
    file_path = "C:\\Users\\dasch\\Desktop\\Summer internship ju\\analytics-dashboard-assessment\\data-to-visualize\\Electric_Vehicle_Population_Data.csv"
    county_percentage_dict, make_percentage_dict, ev_type_percentage_dict = get_unique_values_with_percentages(file_path)

    if county_percentage_dict and make_percentage_dict and ev_type_percentage_dict:
        print("\nSuccessfully extracted unique values and their percentages.")
        # You can now use the dictionaries as needed
    else:
        print("\nFailed to extract unique values and their percentages.")
