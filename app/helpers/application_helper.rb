module ApplicationHelper
  include Pagy::Frontend

  def sort_link(column:, label:)
    link_to(label, posts_path(column: column, direction: next_direction))
  end
  
  def next_direction
    params[:direction] == 'desc' ? 'asc' : 'desc'
  end
end
