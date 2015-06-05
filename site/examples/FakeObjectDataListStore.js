/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var faker = require('faker');

var SIZE = 2000;
var _cache = [];

function createFakeRowObjectData(/*number*/ index) {
  return {
    id: 'id_' + index,
    avartar: faker.image.avatar(),
    city: faker.address.city(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    street: faker.address.streetName(),
    zipCode: faker.address.zipCode(),
    date: faker.date.past(),
    bs: faker.company.bs(),
    catchPhrase: faker.company.catchPhrase(),
    companyName: faker.company.companyName(),
    words: faker.lorem.words(),
    sentence: faker.lorem.sentence(),
  };
}

function getObjectAt(/*number*/ index) /*?object*/ {
  if (index < 0 || index > SIZE){
    return undefined;
  }
  if (_cache[index] === undefined) {
    _cache[index] = createFakeRowObjectData(index);
  }
  return _cache[index];
}

function getAll(){
  if (_cache.length < SIZE){
    for (var i = 0; i < SIZE; i++){
      getObjectAt(i);
    }
  }
  return _cache.slice();
}

function getSize() {
  return SIZE;
}

var FakeObjectDataListStore = {
  getObjectAt: getObjectAt,
  getSize: getSize,
  getAll: getAll,
};

module.exports = FakeObjectDataListStore;
