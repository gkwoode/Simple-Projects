import csv
import json



###############################################
## THIS ALSO WORKS BUT NEEDS FEW WORK        ##
## SOME GET NAME OTHERS DON'T, ALTERNATIVELY ##
###############################################


# def csvConvert(csv_path, json_path):
#     jsonData = {}
    
#     with open(csv_path, encoding='utf-8') as csvfile:
#         csvData = csv.DictReader(csvfile)
                
#         for rows in csvData:
#            key = rows['Name']
#            jsonData[key] = rows
            
            
#     with open(json_path, 'w', encoding='utf-8') as jsonfile:
#         jsonfile.write(json.dumps(jsonData))
        
        
# csv_path = r'ucc.csv'
# json_path = r'ucc.json'

# csvConvert(csv_path, json_path)




#######################################
# THIS ONE WORKS BASICALLYFOR ONE ROW #
#######################################

with open('ucc.csv', encoding='utf-8') as f:
    csvData = csv.reader(f)
    next(csvData)
    jsonData=[]
    
    for rows in csvData:
        jsonData.append({"Name": rows[0]})
        
with open('ucc.json', 'w', encoding='utf-8') as f:
    json.dump(jsonData, f, indent=4)