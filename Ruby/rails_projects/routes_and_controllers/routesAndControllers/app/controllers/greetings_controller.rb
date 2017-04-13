class GreetingsController < ApplicationController
  def index
      #will render the following text to the screen along with the corrisponding html file when this method is envoked by its respective route
      render text: "What do you want me to say?"
      #Does the above render instead of the html with the corrisponding name because there is a call to render here?
  end

  def hello
      #will render the following text to the screen along with the corrisponding html file when this method is envoked by its respective route
      render text: "Hello CodingDojo!"
  end

  def say
      unless params[:name]
        render text: "Saying Hello!"
      else
        if params[:name] == "michael"
          redirect_to "/greetings/hello/joe"
        else
          render text: "Saying Hello #{params[:name]}!"
        end
      end
  end


  def times
      #The following is ruby shorthand for the logic of
      #If a || a = b, that is if a is true leave it alone, if false then it is set to b
      session[:count] ||= 0
      render text: "You have visited this url #{session[:count] += 1} times(s)"
      #So in our case its if session[:count] exists then leave it as is, Else(so if it logically evaluates to false) then set it to 0
  end

  def restart
      reset_session #ruby magic
      render text: "Destroyed Session"
  end
end
