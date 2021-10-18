/* eslint-env node */
import { parseProfile } from '../parsers/parseProfile.js';
import { parseRepository } from '../parsers/parseRepository.js';

var response = {
    "data": {
      "user": {
        "avatarUrl": "https://avatars.githubusercontent.com/u/47126949?v=4",
        "bio": "Senior in CS + ECON",
        "createdAt": "2019-01-28T23:37:51Z",
        "email": "",
        "followers": {
          "totalCount": 0,
        },
        "following": {
          "totalCount": 0,
        },
        "login": "johnathanim20",
        "name": "Johnathan Im",
        "repositories": {
          "nodes": [
            {
              "name": "Lab12",
            },
            {
              "name": "Test",
            },
            {
              "name": "test2",
            },
          ],
          "totalCount": 3,
        },
        "websiteUrl": "test.com",
      },
    },
  }
  var response2 = {
    "data": {
      "user": {
        "repositories": {
          "nodes": [
            {
              "description": "description for test",
              "name": "Test",
              "owner": {
                "login": "johnathanim20",
              },
            },
            {
              "description": null,
              "name": "test2",
              "owner": {
                "login": "johnathanim20",
              },
            },
          ],
        },
      },
    },
  }

test("Parse info from Profile Page1", () => {
    var p = new parseProfile(response);
    expect(p.name).toBe("Johnathan Im");
});

test("Parse info from Profile Page2", () => {
    var p = new parseProfile(response);
    expect(p.followers).toBe(0);
});

test("Parse info from Profile Page3", () => {
    var p = new parseProfile(response);
    expect(p.email).toBe('');
});

test("Parse info from Repo Page1", () => {
    var p2 = new parseRepository(response2);
    expect(p2.name[0].name).toBe('Test');
});
test("Parse info from Repo Page2", () => {
    var p2 = new parseRepository(response2);
    expect(p2.name[1].name).toBe('test2');
});
test("Parse info from Repo Page3", () => {
    var p2 = new parseRepository(response2);
    expect(p2.name[1].owner.login).toBe('johnathanim20');
});