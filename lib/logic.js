/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.example.basic.AssignCourseTransaction} assignCourseTransaction
 * @transaction
 */
async function assignCourseTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.course.qualification;

    // Update the asset with the new value.
    tx.course.qualification = tx.qualification;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.basic.AssignCourseTransaction');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.course);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.basic', 'AssignCourseEvent');
    event.course = tx.course;
    event.oldQualification = oldValue;
    event.newQualification = tx.qualification;
    emit(event);
}

/**
 * Sample transaction
 * @param {org.example.basic.AssignAchievementTransaction} assignAchievementTransaction
 * @transaction
 */
async function AssignAchievementTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.achievement.status;

    // Update the asset with the new value.
    tx.achievement.status = tx.status;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.basic.AssignAchievementTransaction');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.achievement);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.basic', 'AssignAchievementEvent');
    event.achievement = tx.achievement;
    event.oldStatus = oldValue;
    event.newStatus = tx.status;
    emit(event);
}