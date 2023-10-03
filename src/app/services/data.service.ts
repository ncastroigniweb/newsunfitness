/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { config } from "../config/config";
import {
  StringsObject,
  PostsObject,
  TagsObject,
  DietsObject,
  CategoriesObject,
  GoalsObject,
  LevelsObject,
  EquipmentsObject,
  BodypartsObject,
  WorkoutsObject,
  ExercisesObject,
  QuotesObject,
  ProgresoObject,
} from "../interfaces/interfaces";

const Url = config.Url;

@Injectable({
  providedIn: "root",
})
export class DataService {
  page = 0;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  private ejectQuery<T>(query: string) {
    query = Url + query;
    return this.http.get<T>(query);
  }

  postImage(data) {
    this.http
      .post(config.Url + "/controller/contactform.php", data, this.httpOptions)
      .subscribe(
        (data) => {
          if (data === "false") {
          } else {
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getDataStrings() {
    return this.ejectQuery<StringsObject>("/json/data_strings.php");
  }

  getDataPosts() {
    return this.ejectQuery<PostsObject[]>("/json/data_posts.php");
  }

  getDataTags() {
    return this.ejectQuery<TagsObject[]>("/json/data_tags.php");
  }

  getDataPostById(id: number) {
    return this.ejectQuery<PostsObject[]>(`/json/data_posts.php?post=${id}`);
  }

  getDataPostsByTag(id: number) {
    return this.ejectQuery<PostsObject[]>(`/json/data_posts.php?tag=${id}`);
  }

  getDataDiets() {
    return this.ejectQuery<DietsObject[]>("/json/data_diets.php");
  }

  getDataCategories() {
    return this.ejectQuery<CategoriesObject[]>("/json/data_categories.php");
  }

  getDataDietById(id: number) {
    return this.ejectQuery<DietsObject[]>(`/json/data_diets.php?diet=${id}`);
  }

  getDataDietsByCategory(id: number) {
    return this.ejectQuery<DietsObject[]>(
      `/json/data_diets.php?category=${id}`
    );
  }

  getDataGoals() {
    return this.ejectQuery<GoalsObject[]>("/json/data_goals.php");
  }

  getDataLevels() {
    return this.ejectQuery<LevelsObject[]>("/json/data_levels.php");
  }

  getProgreso(id: number, day: number, id_user: string) {
    return this.ejectQuery<ProgresoObject[]>(`/json/data_progreso.php?id=${id}&day=${day}&id_user=${id_user}`);
  }

  getDataEquipments() {
    return this.ejectQuery<EquipmentsObject[]>("/json/data_equipments.php");
  }

  getDataBodyparts() {
    return this.ejectQuery<BodypartsObject[]>("/json/data_bodyparts.php");
  }

  getDataQuotes() {
    return this.ejectQuery<QuotesObject[]>("/json/data_quotes.php");
  }

  getDataWorkoutsByGoal(id: number) {
    return this.ejectQuery<WorkoutsObject[]>(
      `/json/data_workouts.php?goal=${id}`
    );
  }

  getDataWorkoutsByLevel(id: number) {
    return this.ejectQuery<WorkoutsObject[]>(
      `/json/data_workouts.php?level=${id}`
    );
  }

  getDataExercisesByEquipment(id: number) {
    return this.ejectQuery<ExercisesObject[]>(
      `/json/data_equipment.php?equipment=${id}`
    );
  }

  getDataExercisesByBodypart(id: number) {
    return this.ejectQuery<ExercisesObject[]>(
      `/json/data_muscle.php?muscle=${id}`
    );
  }

  getDataExerciseById(id: number) {
    return this.ejectQuery<ExercisesObject[]>(
      `/json/data_exercises.php?exercise=${id}`
    );
  }

  getDataWorkoutById(id: number) {
    return this.ejectQuery<WorkoutsObject[]>(
      `/json/data_workouts.php?workout=${id}`
    );
  }

  getDataWorkoutExercisesByDay(id: number, day: number) {
    return this.ejectQuery<ExercisesObject[]>(
      `/json/data_days.php?id=${id}&day=${day}`
    );
  }
}
