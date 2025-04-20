import pandas as pd
import matplotlib.pyplot as plt

def plot_cafv_eligibility(file_path):
    try:
        df = pd.read_csv(file_path)
        eligibility_counts = (
            df['Clean Alternative Fuel Vehicle (CAFV) Eligibility'].value_counts()
        )

        print("\nEligibility Counts:")
        print(eligibility_counts)

        plt.figure(figsize=(8, 6)) 
        eligibility_counts.plot(kind='bar')
        plt.xlabel('CAFV Eligibility')
        plt.ylabel('Number of Vehicles')
        plt.title('EVs by Clean Alternative Fuel Vehicle (CAFV) Eligibility')
        plt.xticks(
            rotation=0
        ) 
        plt.tight_layout()
        plt.show()
    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please check the file and data for any issues.")


if __name__ == "__main__":
    file_path = "C:\\Users\\dasch\\Desktop\\Summer internship ju\\analytics-dashboard-assessment\\data-to-visualize\\Electric_Vehicle_Population_Data.csv"
    plot_cafv_eligibility(file_path)
