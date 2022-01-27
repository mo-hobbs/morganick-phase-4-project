class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index 
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
            session[:user_id] = user.id
        else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # def show
    #     if current_user
    #         render json: current_user, status: :ok
    #     else
    #         byebug
    #         render json: "No one is logged in", status: :unauthorized
    #     end
    # end

    ## pulled from labs
    def show
        # render json: @current_user
        render status: :ok
        byebug
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
