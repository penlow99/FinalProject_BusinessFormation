import pymongo
from pymongo import MongoClient
import pandas as pd
import os 

connStr = os.getenv('MONGO_CONN')
client = MongoClient(connStr)
db = client['MSA']

#-----------------------------------------------------------

def get_map_data():
    db_data = db.arima_2024_ALL_ROC_scores_total
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
    db_data = db.arima_2024_ALL_ROC_scores_total
    # Convert entire collection to Pandas dataframe
    df = pd.DataFrame(list(db_data.find()))
    df.drop(columns=['_id', 'Pop_Score', 'Unem_Score', 'Emp_Score', 'GDP_Score', 'Bus_Score', 'CPI_Score', 'AMW_Score', 'LP_Score'], inplace=True)
    df.rename(columns={'MSA' : 'Name', '2024_Pop_ROC' : 'Population - RoC', '2024_Unem_Rate' : 'Unemployment Rate', '2024_Emp_ROC' : 'Employment - RoC',
       '2024_GDP_ROC' : 'GDP - RoC', '2024_Bus_ROC' : 'Business Applications - RoC', '2024_CPI' : 'Consumer Price Index', '2024_AMW_ROC' : 'Average Wages - RoC',
       '2024_LP_ROC' : 'Labor Participation - RoC', 'Total_Score' : 'Total Score',
       'Overall_Rank' : 'Rank'}, inplace=True)
    df = df.round(2)
    df['Rank'] = df['Rank'].astype(int)
    cols = df.columns.tolist()
    cols.insert(0, cols.pop(cols.index('Rank')))
    df = df.reindex(columns= cols)
    html_table = df.to_html(header=True, table_id="table_data", index=False)

    return html_table
#---------------------------------------------------------------------------------------

def setMode(mode):
    if (mode != None) and (mode == 'light'):
        return mode
    else:
        return 'dark'    