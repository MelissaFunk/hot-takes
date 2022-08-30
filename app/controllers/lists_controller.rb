class ListsController < ApplicationController

  def create
    render json: List.create(list_params), status: :created
  end

  private

  def list_params
    params.permit(:top5, :likes, :user_id, :category_id)
  end

end
