require 'json'
require 'bundler'
Bundler.require

DB = Sequel.sqlite("#{Dir.pwd}/transactions.db")

get '/all' do
  content_type :json
  DB[:transactions].all.to_json
end
