class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel_#{params[:room_id]}"
    # byebug
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
