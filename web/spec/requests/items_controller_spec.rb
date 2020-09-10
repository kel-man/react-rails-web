require 'rails_helper'

describe 'ItemsController', type: :request do
  let(:item1) { Item.create({
    topic: 'Item1 Topic',
    contents: 'Item1 Contents',
  }) }

  before do
    item1
  end

  describe 'index' do
    let(:request) { get '/items' }
    let(:expected_response) { {
      items: [{
        id: item1.id,
        topic: item1.topic,
        contents: item1.contents,
      }]
    }.to_json }

    it 'returns a list of items in JSON' do
      request
      expect(response.body).to eq expected_response
    end
  end

  describe 'create' do
    let(:item_topic) { 'PostItem Topic' }
    let(:item_contents) { 'PostItem Contents' }
    let(:request) { post '/items', params: {
      item: {
        topic: item_topic,
        contents: item_contents,
        isBroken: 'stringy',
      }
    } }
    let(:expected_response) { {
        'topic' => item_topic,
        'contents' => item_contents,
    } }
    it 'creates an item in the database with valid values' do
      expect{ request }.to change{ Item.count }.by ( 1 )
      expect(JSON.parse(response.body)).to include expected_response
    end
  end
end
