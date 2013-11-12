get '/' do
  @user=User.first
  erb :index
end


post '/' do
@tweet= params[:tweet_text]

twit_obj=Twitter.update(@tweet)

if request.xhr?
	twit_obj.text
else
redirect ('/')
	end
end