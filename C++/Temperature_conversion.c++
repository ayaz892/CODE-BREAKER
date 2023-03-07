#include<iostream>

int main()
{
	float temperature,Tc=0,Tf=0;
	int value;
	printf("Enter the Temperature:");
	scanf("%f",&temperature);
	printf("\n Enter the unit in which convert the temperature(1-Fehrenheit, 2-Celcius):");
	scanf("%d",&value);
	if(value==1)
	{
		Tf=(temperature*9/5)+32;
		printf("Temperature in Fehrenheit is:%f",Tc);

		
	}
	else if(value ==2)
	{
		Tc=(temperature-32)*5/9;
		printf("Temperature in Celcius is:%f",Tc);
	}
}
