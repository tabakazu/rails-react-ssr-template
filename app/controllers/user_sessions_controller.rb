class UserSessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    super do
      return render component: 'UserSessionNew', tag: 'span'
    end
  end

  # POST /resource/sign_in
  def create
    super do |resource|
      sign_in(:user, resource.user)
      respond_to do |format|
        format.html { return respond_with(resource, serialize_options(resource)) }
        format.json { return render json: resource.user, status: :ok }
      end
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
