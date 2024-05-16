import csv
import json

csvFilePath = 'contratos2024.csv'
jsonFilePath = 'contratos2024.json'

data = []

with open(csvFilePath, encoding='utf-8') as csvFile:
    csvReader = csv.DictReader(csvFile, delimiter=';')
    for rows in csvReader:
        idcontrato = rows['idcontrato']
        rows['_id'] = idcontrato
        rows['precoContratual'] = float(rows['precoContratual'].replace(',', '.'))
        rows.pop('idcontrato')
        data.append(rows)

with open(jsonFilePath, 'w', encoding='utf-8') as jsonFile:
    for entry in data:
        jsonFile.write(json.dumps(entry, ensure_ascii=False))
        jsonFile.write("\n")
