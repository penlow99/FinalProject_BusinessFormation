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
    df = df.sort_values(by=['Total_Score'], ascending=False)
    df.reset_index(inplace=True, drop=True)
    df.reset_index(inplace=True)
    # create the 'Top 10' list
    df_top10 = df.iloc[0:10]

    return df_top10, df
#---------------------------------------------------------------------------------------

def get_table_data():
    # Select the collection within the database
    db_data = db.arima_2024_ROC_score_total
    # Convert entire collection to Pandas dataframe
    df = pd.DataFrame(list(db_data.find()))
    df.drop(columns=['_id'], inplace=True)
    html_table = df.to_html(header=True, table_id="table_data", index=False)

    return html_table