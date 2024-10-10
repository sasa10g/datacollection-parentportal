// @ts-nocheck
const SubmitFunc = () => {
  // Types for data collection are in @/types/data-collection
  const handleDataCollectionSubmit = async () => {
    console.log('Data collection submitted', dataCollectionSubmitValues)

    const submissionResults: { name: string; success: boolean }[] = []

    const submitAcquisitions =
      dataCollectionSubmitValues.acquisitions.length > 0
        ? apiRequestDataCollection
            .post(`${dataCollectionApiUrl}/Acquisitions/entries/bulk`, dataCollectionSubmitValues.acquisitions)
            .then((response) => {
              if (response.status === 201) {
                submissionResults.push({ name: 'Acquisitions', success: true })
              } else {
                submissionResults.push({ name: 'Acquisitions', success: false })
                console.log('Error submitting acquisitions:', response)
              }
            })
            .catch((error) => {
              submissionResults.push({ name: 'Acquisitions', success: false })
              console.log('Error submitting acquisitions:', error)
            })
        : Promise.resolve()

    const submitTargetBehaviors =
      dataCollectionSubmitValues.targetBehaviors.length > 0
        ? apiRequestDataCollection
            .post(`${dataCollectionApiUrl}/TargetBehaviors/entries/bulk`, dataCollectionSubmitValues.targetBehaviors)
            .then((response) => {
              if (response.status === 201) {
                submissionResults.push({ name: 'Target Behaviors', success: true })
              } else {
                submissionResults.push({ name: 'Target Behaviors', success: false })
                console.log('Error submitting target behaviors:', response)
              }
            })
            .catch((error) => {
              submissionResults.push({ name: 'Target Behaviors', success: false })
              console.log('Error submitting target behaviors:', error)
            })
        : Promise.resolve()

    const submitParentGoals =
      dataCollectionSubmitValues.parentGoals.length > 0
        ? apiRequestDataCollection
            .post(`${dataCollectionApiUrl}/ParentGoals/entries/bulk`, dataCollectionSubmitValues.parentGoals)
            .then((response) => {
              if (response.status === 201) {
                submissionResults.push({ name: 'Parent Goals', success: true })
              } else {
                submissionResults.push({ name: 'Parent Goals', success: false })
                console.log('Error submitting parent goals:', response)
              }
            })
            .catch((error) => {
              submissionResults.push({ name: 'Parent Goals', success: false })
              console.log('Error submitting parent goals:', error)
            })
        : Promise.resolve()

    await Promise.all([submitAcquisitions, submitTargetBehaviors, submitParentGoals])

    // Check if all submissions were successful
    const allSuccessful = submissionResults.every((result) => result.success)

    if (allSuccessful) {
      console.log('All data collection submitted successfully')
      setIsDataCollectionSubmitted(true)
      // Optionally, you can disable the submit button or change UI state here
    } else {
      // Log which submissions failed
      submissionResults
        .filter((result) => !result.success)
        .forEach((result) => console.log(`Submission failed for: ${result.name}`))
    }
  }

  return <></>
}

export default SubmitFunc
