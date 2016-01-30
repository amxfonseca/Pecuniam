require 'sequel'

DB = Sequel.sqlite("#{Dir.pwd}/pecuniam.db")

puts "Setting up database"
DB.create_table? :transactions do
  DateTime :date
  String :name
  String :account
  String :contra_account
  String :action
  Float :amount
  String :description
end

puts "All done!"
