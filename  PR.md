Persistencia: MongoDB (NOTA: A versão docker exige que se faça importação manual do
contratos2024.json (`mongoimport -d contratos -c contratos /tmp/contratos2024.json`))

Execução: `docker-compose up -d` (o compose constroi as imagens automaticamente)

queries: `mongodb
db.contratos.countDocuments()
db.contratos.countDocuments({tipoprocedimento: "Ajuste Direto Regime Geral"})
db.contratos.distinct("entidade_comunicante").sort()
db.contratos.aggregate([{$group: {_id: "$tipoprocedimento", total: {$sum: 1}}}])
db.contratos.aggregate([{$group: { _id: "$tipoprocedimento", total: { $sum: "$precoContratual" } } }])
`
