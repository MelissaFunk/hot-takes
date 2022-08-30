class CategoriesController < ApplicationController

  def index
    render json: Category.all, status: :ok
  end

  def show
    render json: Category.find(params[:id]), status: :ok
  end

end
