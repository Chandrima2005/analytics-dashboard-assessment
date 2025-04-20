import pandas as pd
import matplotlib.pyplot as plt

def plot_models_by_year(file_path):
    try:
        df = pd.read_csv(file_path)

        models_by_year = df.groupby('Model Year')['Model'].nunique()
        print("\nData before plotting:")
        print(models_by_year)

        plt.figure(figsize=(10, 6)) 
        models_by_year.plot(kind='bar') 
        plt.xlabel('Model Year')
        plt.ylabel('Number of Distinct Models')
        plt.title('Number of Distinct EV Models Over the Years')
        plt.xticks(
            rotation=45, ha='right'
        ) 
        plt.tight_layout()
        plt.show()
    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please check the file and data for any issues.")

if __name__ == "__main__":
    file_path = "C:\\Users\\dasch\\Desktop\\Summer internship ju\\analytics-dashboard-assessment\\data-to-visualize\\Electric_Vehicle_Population_Data.csv"
    plot_models_by_year(file_path)
