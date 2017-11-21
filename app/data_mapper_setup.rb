require 'data_mapper'
require 'dm-postgres-adapter'

require_relative 'models/temperature'


require 'pry'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/Thermostat_#{ENV['RACK_ENV']}")
DataMapper.finalize
DataMapper.auto_upgrade!
