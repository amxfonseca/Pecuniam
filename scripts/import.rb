require 'date'
require 'csv'
require 'sequel'

DB = Sequel.sqlite("#{Dir.pwd}/pecuniam.db")
DB[:transactions]

if Dir.glob("#{Dir.pwd}/csv/*.csv").empty?
  puts "The csv folder is empty! try adding some files"
  exit
end

Dir.glob("#{Dir.pwd}/csv/*.csv") do |file|
  puts "Importing #{file}..."

  transactions_csv = CSV.read(file)
  # remove the first entry which describes the fields
  transactions_csv.shift

  transactions_csv.each do |row|
    DB[:transactions].insert({
      date: DateTime.iso8601(row[0]),
      name: row[1],
      account: row[2],
      contra_account: row[3],
      action: row[5],
      amount: row[6].sub(',', '.').to_f,
      description: row[8]
    })
  end
end

puts 'Done importing'

puts 'Removing duplicates'
distinct_transactions = DB[:transactions].distinct.all
DB[:transactions].delete

distinct_transactions.each do |transaction|
  DB[:transactions].insert(transaction)
end

puts "All done!"
