json.pokemon do
  json.extract! @pokeman, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokeman.image_url)

  json.item_ids @pokeman.items.pluck(:id)
end

json.items do
  @pokeman.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name
    end
  end
end
