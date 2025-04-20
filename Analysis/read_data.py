import pandas as pd

df = pd.read_csv(r"C:\Users\dasch\Desktop\Summer Internship ju\analytics-dashboard-assessment\data-to-visualize\Electric_Vehicle_Population_Data.csv")  
print(df)
print(df.info())
print(df.describe())

