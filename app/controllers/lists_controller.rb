class ListsController < ApplicationController

  def index
    render json: List.all, status: :ok
  end

  def show
    render json: List.find(params[:id]), status: :ok
  end

  def create
    render json: List.create(list_params), status: :created
  end

  private

  def list_params
    params.permit(:num1, :num2, :num3, :num4, :num5, :likes, :user_id, :category_id)
  end

end
