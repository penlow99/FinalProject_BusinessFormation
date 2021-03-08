 
from flask import Flask, render_template, url_for, redirect, request
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
    mode = functions.setMode(request.args.get('mode'))
    return render_template('index.html', title="MetroGnomics Dashboard", top10=top10_df.to_dict(), data_table=df_table.to_dict(), theme=mode)
#-----------------------------------------------------------------
@app.route('/table')
def table():
    html_table = functions.get_table_data()
    mode = functions.setMode(request.args.get('mode'))
    return render_template('table.html', title="MetroGnomics Forecasts", table=html_table, theme=mode)
#-----------------------------------------------------------------
@app.route('/comparison')
def comparison():
    mode = functions.setMode(request.args.get('mode'))
    return render_template('comparison.html', title="MetroGnomics Comparison", theme=mode)
#-----------------------------------------------------------------
@app.route('/about')
def about():
    mode = functions.setMode(request.args.get('mode'))
    return render_template('about.html', title="About MetroGnomics", theme=mode)
#-----------------------------------------------------------------

# app import check
if __name__ == '__main__':
    app.run()              
