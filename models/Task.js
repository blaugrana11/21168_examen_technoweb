import Model from './Model.js';

export default class Task extends Model {

  static table = "vocabulary.words";
  static primary = ["id_word"];
  
}