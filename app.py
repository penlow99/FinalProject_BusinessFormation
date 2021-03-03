 
from flask import Flask, render_template, url_for, redirect
import functions



############################
### Initialize flask app ###
############################
app = Flask(__name__)


##############
### ROUTES ###
##############
#-----------------------------------------------------------------
@app.route('/')
def go_home():
    return redirect('/index')
#-----------------------------------------------------------------
@app.route('/index')
def index():
    top10_df, df_table = functions.get_map_data()
    df_table.set_index(str('CBSA'), inplace=True)
    return render_template('index.html', title="MetroGnomics Dashboard", top10=top10_df.to_dict(), data_table=df_table.to_dict())
#-----------------------------------------------------------------
@app.route('/table')
def table():
    html_table = functions.get_table_data()
    return render_template('table.html', title="MetroGnomics Forecasts", table=html_table)
#-----------------------------------------------------------------
@app.route('/comparison')
def comparison():
    return render_template('comparison.html', title="MetroGnomics Comparison")
#-----------------------------------------------------------------
@app.route('/about')
def about():
    return render_template('about.html', title="About MetroGnomics")
#-----------------------------------------------------------------


# app import check
if __name__ == '__main__':
    app.run()              
