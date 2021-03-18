class HomesController < ApplicationController
  def show
    render component: 'Home', props: { session: { user: current_user }}, tag: 'span'
  end
end
