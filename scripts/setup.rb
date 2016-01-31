require 'sequel'

DB = Sequel.sqlite("#{Dir.pwd}/pecuniam.db")

puts "Setting up database"
DB.create_table? :transactions do
  Integer :date
  String :name
  String :account
  String :contra_account
  boolean :outgoing
  Float :amount
  String :description
end

puts "All done!"
