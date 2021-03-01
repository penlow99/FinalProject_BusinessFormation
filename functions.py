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
    db_data = db.Predicted_2024_ROC_rank_total2
    # Convert entire collection to Pandas dataframe
    df = pd.DataFrame(list(db_data.find()))
    df.drop(columns=['_id'], inplace=True)

    # create the 'Emergent' list
    df_top = df[['CBSA', 'Rank_Total']].copy()
    df_top = df_top.sort_values(by=['Rank_Total'])
    # grab the Top 40
    ser_top = df_top.iloc[0:39,0]
    emergent_string = ''
    for value in ser_top:
        emergent_string = emergent_string + str(value) + '||'

    # create two lists for the javascript
    cbsa_string = ''
    data_string = ''
    for index, row in df.iterrows():
        cbsa_string = cbsa_string + str(row['CBSA']) + '||'
        data_string = data_string + str(row['Pop_ROC_Rank']) + '|' + str(row['Unem_ROC_Rank']) + '|' + str(row['Emp_ROC_Rank']) + '|' + str(row['GDP_ROC_Rank']) + '|' + str(row['Rank_Total']) + '||'
    
    return cbsa_string, data_string, emergent_string

#---------------------------------------------------------------------------------------

def get_table_data():
    # Select the collection within the database
    db_data = db.Predicted_2024_ROC_rank_total2
    # Convert entire collection to Pandas dataframe
    df = pd.DataFrame(list(db_data.find()))
    df.drop(columns=['_id'], inplace=True)
    html_table = df.to_html(header=True, table_id="table_data", index=False)

    return html_table