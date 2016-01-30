require 'json'
require 'bundler'
Bundler.require

DB = Sequel.sqlite("#{Dir.pwd}/pecuniam.db")

get '/' do
  send_file 'public/index.html'
end

get '/bundle.js' do
  send_file 'public/bundle.js'
end

get '/all' do
  content_type :json
  DB[:transactions].all.to_json
end
