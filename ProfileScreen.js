import React from 'react';
import {View, Text, Stylesheet, TouchableOpacity} from 'react-native';
import  Project from '../components/Project';
import StudentInfo from '../components/StudentInfo';

const ProfileScreen = () => {
    return(
        <View style = {styles.screen}>
            <StudentInfo 
            fullname="John Doe"
            jobPosition="UI/UX Designer"
            desc="We're passionate about creating beautiful desing for startups & leading brands "
            image={require('../..assets/Avatar-4.jpg')}
            />
            <View style = {styles.heading}>
                <Text style={styles.text}>PROJECTS</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style= {styles.btnText}>View All</Text>
                </TouchableOpacity>
            </View>
            <Project first={require('../..assets/project-1.jpg')} second={require('../..assets/project-2.png')}/>

        </View>

    );

}
