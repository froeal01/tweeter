class CreateUsers < ActiveRecord::Migration
  def change
  	create_table :users do |t|
  		t.string :name
  		t.string :twitter_handle
  		t.string :password
  		t.timestamp
  	end
  end
end
