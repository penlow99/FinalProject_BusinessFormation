import pymongo
from pymongo import MongoClient
import pandas as pd
import os 

# Create instance of MongoClient
client = MongoClient()
# Connection URI
connStr = os.getenv('MONGO_CONN')
client = MongoClient(connStr)
# Select database
db = client['MSA']

#-----------------------------------------------------------

def get_map_data():
    db_data = db.arima_2024_ROC_score_total
    # Convert entire collection to Pandas dataframe
    df = pd.DataFrame(list(db_data.find()))
    df.drop(columns=['_id'], inplace=True)

    # create the 'Emergent' list
    df_top = df[['CBSA', 'Total_Score', 'MSA']].copy()
    df_top = df_top.sort_values(by=['Total_Score'], ascending=False)
    # grab the Top 40, and just the first column (CBSA)
    ser_top40 = df_top.iloc[0:40,0]
    # Get Top 10 for bar chart
    df_top10 = df_top.iloc[0:10]
    df_top10.reset_index(inplace=True, drop=True)

    return df_top10, ser_top40, df
#---------------------------------------------------------------------------------------

def get_table_data():
    # Select the collection within the database
    db_data = db.arima_2024_ROC_score_total
    # Convert entire collection to Pandas dataframe
    df = pd.DataFrame(list(db_data.find()))
    df.drop(columns=['_id'], inplace=True)
    html_table = df.to_html(header=True, table_id="table_data", index=False)

    return html_table