require 'rubygems'
require 'sinatra'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end

set :allow_origin, :any
set :allow_methods, [:get, :post, :options]
set :allow_credentials, true
set :max_age, "1728000"
set :expose_headers, ['Content-Type']

post '/subscribe' do
  case params['state']
  when 'success' then '1'
  when 'error' then '0'
  when 'already-subscribed' then 'Already subscribed.'
  end
end
