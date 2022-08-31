class CommentsController < ApplicationController

  def create
    render json: Comment.create(comment_params), status: :created
  end

  private

  def comment_params
    params.permit(:comment, :list_id)
  end

end
