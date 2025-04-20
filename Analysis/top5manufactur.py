import pandas as pd
import matplotlib.pyplot as plt


try:
    df = pd.read_csv(r"C:\Users\dasch\Desktop\Summer Internship ju\analytics-dashboard-assessment\data-to-visualize\Electric_Vehicle_Population_Data.csv")

    print("\n--- Value Counts for Make ---")
    top_5_makes = df['Make'].value_counts().head(5)
    print(top_5_makes)

    # Bar chart of EV makes
    plt.figure(figsize=(10, 6))
    top_5_makes.plot(kind='bar')
    plt.title('Top 5 EV Makes')
    plt.xlabel('Make')
    plt.ylabel('Count')
    plt.show()

except Exception as e:
    print(f"An error occurred: {e}")